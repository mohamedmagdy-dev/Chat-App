export default function FormInfo({ title, desc }) {
  return (
    <div className="text-center ">
      <h1 className="text-dark-text mb-5 dark:text-white font-bold text-5xl">
        {title}
      </h1>
      <p className="text-dark-text dark:text-white">{desc}</p>
    </div>
  );
}
