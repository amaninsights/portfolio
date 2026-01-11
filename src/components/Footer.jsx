export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aman
        </p>
        <p className="text-sm text-muted-foreground">
          Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
};
