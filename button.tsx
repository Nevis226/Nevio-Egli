
export function Button({ children, onClick, disabled, className, variant }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded font-medium ${
        variant === "outline" ? "border border-gray-400 bg-white" : "bg-blue-500 text-white"
      } ${className}`}
    >
      {children}
    </button>
  );
}
