import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Doctors</PageTitle>
          <PageDescription>Manage the doctors of your clinic</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Add Doctor
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>Médicos</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
