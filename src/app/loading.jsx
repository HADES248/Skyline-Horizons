export default function loading() {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-transparent">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-6"></div>
      <h1 className="text-2xl font-semibold mb-2">Hang tight!</h1>
      <p className="text-lg italic">We're getting things ready for you...</p>
    </div>
  );
}