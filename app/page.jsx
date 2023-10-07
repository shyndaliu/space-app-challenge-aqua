import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";
import TimeLine from "@/components/home/timeline";
import UserDropdown from "@/components/layout/user-dropdown";

export default async function Home() {
  //const session = await getServerSession(authOptions);
  return (
    <>
      <UserDropdown />
      <div className="my-20">
        <Landing id="about" />
        <TimeLine id="timeline" />

      </div>
    </>
  );
}
