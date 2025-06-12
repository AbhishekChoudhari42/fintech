export default function SectionHeading({ text }) {
    return (
      <div className="flex items-center space-x-4">
        <div className="w-10 h-1 bg-blue-500" />
        <h2 className="text-3xl font-semibold text-blue-500">{text}</h2>
      </div>
    );
  }
  