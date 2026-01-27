export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xl font-bold tracking-wider mb-4">
          PRNT<span className="text-accent">FRM</span>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} PRNTFRM. All rights reserved.
          Proudly Australian.
        </p>
      </div>
    </footer>
  );
}
