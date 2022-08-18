import React, { useState } from "react";
// Denne kode har jeg brugt i en tidligere opgave, hvor jeg fandt den på nettet. Jeg har ikke kunne genfinde linket, men det er altså fundet kode, som jeg har tilrettet
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const NyhedsbrevForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Tak!</div>
        <div className="text-md">Du hører fra os.</div>
      </>
    );
  }

  return (
    <form
    action={FORM_ENDPOINT}
    onSubmit={handleSubmit}
    method="POST">
    <input type="email" name="email" placeholder="Din Email" />
    <button type="submit">Tilmeld</button>
</form>
  );
};

export default NyhedsbrevForm;