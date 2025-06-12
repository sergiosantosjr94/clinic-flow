"use client";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { authClient } from "@/lib/auth-client";

import { DatePicker } from "./components/date-picker";

const Dashboard = () => {
  const session = authClient.useSession();

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>
            Access a detailed overview of key metrics and patient outcomes
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <DatePicker />
        </PageActions>
      </PageHeader>
      <PageContent>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome {session?.data?.user?.name}</p>
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default Dashboard;
