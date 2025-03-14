import React from "react";

const RequestErrorComponent = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-white">
      <div className="z-10 flex flex-col gap-8 text-lg text-center">
        Błąd. Ponów próbę
      </div>
    </div>
  );
};

export default RequestErrorComponent;
