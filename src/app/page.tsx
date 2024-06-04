
export default function Home() {
  return (
    <div
    m="4"
    p="4"
    bg="gray-100"
    >
      <div><p text="2xl" >Hi 1</p></div>
      <div><p text="2xl">Hi 2</p></div>
      <div><p text="2xl">Test</p></div>
      <span
                className="group-hover:-translate-x-1 i-lucide:arrow-up-right"
                inline="block"
                transition="transform"
                motion-reduce="transform-none"
                m="l-1"
              />
    </div>
  );
}
