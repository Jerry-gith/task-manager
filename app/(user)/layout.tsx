import { Providers } from "@/providers/providers";
import { ReactNode, Suspense } from "react";
import Loading from "../loading";
import { DashboardHeader, DashboardFooter } from "@/components";

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-0 p-0 max-h-screen">
      <Providers>
        <Suspense fallback={<Loading />}>
          <DashboardHeader />
          {children}
          <DashboardFooter />
        </Suspense>
      </Providers>
    </div>
  );
};

export default UserLayout;
