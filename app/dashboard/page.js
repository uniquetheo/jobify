import { getServerSession } from "next-auth";
import Layout from "../../components/Layout";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="bg-[#f1f5fd] min-h-screen">
      <Layout>
        <div className="flex w-full h-full items-center justify-center"></div>
      </Layout>
    </div>
  );
};

export default Dashboard;
