import Image from 'next/image';
// import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <div>
      {/* <Button variant="destructive">Click me</Button> */}
      <Image src="/logo.svg" height={50} width={50} alt="Logo" />
    </div>
  );
}
