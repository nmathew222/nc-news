import { patchVotes } from "../utils/api";
import { useState } from "react";

export default function Votes({ article_id, votes }) {
  const [votesChanges, setVotesChanges] = useState(0);

  const handleVote = () => {
    setVotesChanges((currentVotes) => currentVotes + 1);
    patchVotes(article_id, 1).catch((err) => {
      setVotesChanges((currentVotes) => currentVotes - 1);
    });
  };

  const decreaseVotes = () => {
    setVotesChanges((currentVotes) => currentVotes - 1);
    patchVotes(article_id, -1).catch((err) => {
      setVotesChanges((currentVotes) => currentVotes + 1);
    });
  };

  return (
    <>
      <h5>Votes====>({votes + votesChanges})</h5>
      <button onClick={handleVote}>vote up</button>

      <button onClick={decreaseVotes}>vote down</button>
    </>
  );
}
