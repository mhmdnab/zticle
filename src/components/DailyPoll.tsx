"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Adjust if your path is different

const POLL_ID = "poll2"; // Your Firestore doc ID

type PollType = {
  question: string;
  options: string[];
  votes: number[];
};

export default function DailyPoll() {
  const [poll, setPoll] = useState<PollType | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [voted, setVoted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch poll
  useEffect(() => {
    const fetchPoll = async () => {
      const docRef = doc(db, "polls", POLL_ID);
      const pollSnap = await getDoc(docRef);
      if (pollSnap.exists()) {
        setPoll(pollSnap.data() as PollType);
      }
      setLoading(false);
      if (
        typeof window !== "undefined" &&
        localStorage.getItem(`voted_${POLL_ID}`)
      ) {
        setVoted(true);
      }
    };
    fetchPoll();
  }, []);

  // Defensive: fallback if votes is not array
  const votes =
    poll && Array.isArray(poll.votes)
      ? poll.votes
      : poll && Array.isArray(poll.options)
      ? Array(poll.options.length).fill(0)
      : [];

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const handleVote = async () => {
    if (selected === null || voted || !poll) return;
    setVoted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(`voted_${POLL_ID}`, "true");
    }
    const docRef = doc(db, "polls", POLL_ID);
    const votesField = `votes.${selected}`;
    await updateDoc(docRef, { [votesField]: increment(1) });
    setPoll((prev) => {
      if (!prev) return prev;
      const newVotes = [...votes];
      newVotes[selected]++;
      return { ...prev, votes: newVotes };
    });
  };

  if (loading || !poll) {
    return (
      <div className="bg-white text-[#2F5233] p-8 rounded-xl shadow-md mt-8 max-w-md mx-auto text-center">
        Loading poll...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#B1D8B7] to-[#94C973] p-8 rounded-3xl shadow-2xl mt-12 max-w-lg mx-auto border-[3px] border-[#76B947]">
      <div className="flex items-center justify-center mb-3">
        <span className="text-3xl mr-2">🗳️</span>
        <h3 className="text-2xl font-extrabold text-[#2F5233] tracking-tight">
          {poll.question}
        </h3>
      </div>
      <p className="text-[#2F5233]/80 mb-8 text-center text-base">
        Have your say and see what others think!
      </p>
      {voted ? (
        <div>
          <div className="mb-6 text-[#76B947] font-semibold text-center text-lg">
            🎉 Thanks for voting! Here’s how everyone voted:
          </div>
          {poll.options.map((option, idx) => {
            const maxVotes = Math.max(...votes);
            const isTop =
              votes[idx] === maxVotes && totalVotes !== 0 && maxVotes !== 0;
            return (
              <div key={idx} className="flex items-center gap-3 mb-4">
                <div className="flex-1">
                  <span className="text-[#2F5233] font-medium flex items-center">
                    {option}
                    {isTop && (
                      <span className="ml-1" title="Most Popular">
                        🏆
                      </span>
                    )}
                  </span>
                  <div className="h-3 bg-[#E9F7EC] rounded-lg mt-2 overflow-hidden">
                    <div
                      className="h-full bg-[#76B947] transition-all duration-300 rounded-lg"
                      style={{
                        width: totalVotes
                          ? `${(votes[idx] / totalVotes) * 100}%`
                          : "0%",
                      }}
                    />
                  </div>
                </div>
                <span className="min-w-[48px] text-right text-base text-[#2F5233] font-semibold">
                  {totalVotes ? Math.round((votes[idx] / totalVotes) * 100) : 0}
                  %
                  <br />
                  <span className="text-xs text-[#2F5233]/70">
                    {votes[idx]} vote{votes[idx] !== 1 && "s"}
                  </span>
                </span>
              </div>
            );
          })}
          <div className="mt-6 text-sm text-[#2F5233] text-center">
            {totalVotes} total vote{totalVotes !== 1 && "s"}
          </div>
          <div className="mt-4 text-center text-[#2F5233]/70 text-xs">
            🚀 New poll every day. Check back tomorrow!
          </div>
        </div>
      ) : (
        <>
          {poll.options.map((option, idx) => (
            <button
              key={idx}
              className={`block w-full text-left px-6 py-4 mb-4 rounded-2xl border-2 shadow-sm transition
                ${
                  selected === idx
                    ? "bg-[#94C973] border-[#2F5233] text-[#2F5233] font-bold scale-105"
                    : "bg-white border-[#B1D8B7] text-[#2F5233] hover:bg-[#EBF5E7] hover:border-[#76B947]"
                }`}
              onClick={() => setSelected(idx)}
            >
              {option}
            </button>
          ))}
          <button
            className="mt-6 w-full bg-[#76B947] hover:bg-[#2F5233] transition text-white text-lg px-6 py-3 rounded-2xl font-semibold shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={selected === null}
            onClick={handleVote}
          >
            Cast My Vote
          </button>
          <div className="mt-4 text-center text-[#2F5233]/80 text-sm">
            Your vote matters! Choose an option and see the results.
          </div>
        </>
      )}
    </div>
  );
}
