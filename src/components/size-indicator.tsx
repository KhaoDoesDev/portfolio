export function SizeIndicator() {
  return (
    <div className="fixed z-99 bottom-0 right-0 rounded-lg bg-gray-700 py-0.5 px-2 m-2 text-white border-2 text-sm">
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  );
}