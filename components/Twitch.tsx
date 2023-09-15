import React from "react";

export default function Twitch() {
  return (
    <section className="my-32 flex justify-center">
      <iframe
        src="https://player.twitch.tv/?channel=raknage&parent=localhost&autoplay=true&muted=true"
        height="300"
        width="400"
        allowFullScreen
      />
    </section>
  );
}
