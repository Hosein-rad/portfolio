export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/80">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
    </div>
  );
}
