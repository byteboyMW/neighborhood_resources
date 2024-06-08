export default function Banner() {
  return (
    <div
      id="home"
      className="hero h-[20vh] lg:h-[30vh] dt:h-[40vh]"
      style={{
        backgroundImage:
          "url('oaks.png')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-4xl dt:text-5xl font-bold">Making Highland Oaks <i>better</i>.</h1>
        </div>
      </div>
    </div>
  );
}
