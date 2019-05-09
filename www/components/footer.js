export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-3xl mx-auto bg-white text-center text-gray-600 text-sm px-2 sm:px-8 py-4 mb-1">
      &copy; {year} Tim Hall - Creative code and engineering
    </footer>
  );
}
