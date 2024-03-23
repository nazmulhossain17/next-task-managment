import { getServerSession } from "next-auth";
import FrontModal from "~/Components/FrontModal/FrontModal";
import { authOptions } from "~/server/auth";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold">
          Dashboard Home {session?.user ? session.user.email : "Unknown"}
        </h1>
        <FrontModal />
      </div>
    </>
  );
};

export default Dashboard;
