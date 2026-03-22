export default function Team() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-2 md:px-4">
        <div className="grid grid-cols-2 gap-x-8 md:gap-x-32 gap-y-20">
          <div>
            <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight">LOMAX WARD</h2>
            <p className="text-white text-sm md:text-lg leading-relaxed mt-6">General Partner</p>
          </div>
          <div>
            <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight">ROD MALLO</h2>
            <p className="text-white text-sm md:text-lg leading-relaxed mt-6">General Partner</p>
          </div>
          <div>
            <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight">CAMILA SEGURA</h2>
            <p className="text-white text-sm md:text-lg leading-relaxed mt-6">Founder Associate</p>
          </div>
          <div>
            <h2 className="text-white text-xl md:text-3xl font-bold tracking-tight">SULEMAN SHAH</h2>
            <p className="text-white text-sm md:text-lg leading-relaxed mt-6">Finance Director</p>
          </div>
        </div>
      </div>
    </>
  );
}
