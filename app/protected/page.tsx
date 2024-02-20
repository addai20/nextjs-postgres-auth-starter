import SignOut from "@/components/sign-out";
import HeaderNav from "@/components/header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeaderNav></HeaderNav>
      <SignOut />
    </div>
  );
}

// Objectives:
//   1) Make this page a landing page 
//   2) Move the SignOut to the top right hand corner of the page
