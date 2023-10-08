export default function NasaVideo() {
  return (
    <>
      <div
        id="test"
        className="relative z-20 h-screen w-full bg-violet-300 px-5 py-10 "
      >
        <div className="absolute  left-1/4 right-1/4">
          <p className="mx-auto pt-5 text-8xl text-violet-950">
            Let's watch some video...
          </p>
          <p className="py-5">
            Get ready for an out-of-this-world adventure as we journey with NASA to explore the wonders of water in our universe. Buckle up, young explorers, and let's watch the video to unlock the mysteries of water beyond our blue planet!
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2oKYXKKf28g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
