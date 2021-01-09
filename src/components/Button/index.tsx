type ButtonProps = {
  label: string;
  onClick?(): void;
};

export default function Button({ label, onClick }: ButtonProps) {

  const interactionProps = {
    onClick,
  };

  return (
    <button
      {...interactionProps}
      className="transition select-none appearance-none py-3 px-10 text-black border-none text-lg font-semibold rounded-2xl bg-gradient-to-b from-white to-gray-300 hover:from-white hover:to-white focus:outline-none focus:ring focus:border-blue-900"
      style={{ boxShadow: '0px 0px 5px 1px rgba(62, 59, 172, 0.18), 0px 5px 7px rgba(191, 191, 191, 0.1)'}}
    >
      {label}
    </button>
  );
}
