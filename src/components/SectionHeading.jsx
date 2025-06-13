export default function SectionHeading({ text }) {
    return (
      <div className="flex items-center space-x-4">
        <div className="w-[50px] h-[2px] bg-blue-500" />
        <h2 className="text-md font-light text-blue-500">{text}</h2>
      </div>
    );
  }
  