import Ballpit from "../components/Ballpit";

export default function TestPage() {
  return (
    <div className="h-screen w-full relative bg-black">
      <Ballpit
        className="w-full h-full"
        count={50}
        gravity={0.5}
        friction={0.9}
        wallBounce={0.9}
        followCursor={true}
        colors={[0xff69b4, 0x87cefa, 0xffffff]}
      />
    </div>
  );
}
