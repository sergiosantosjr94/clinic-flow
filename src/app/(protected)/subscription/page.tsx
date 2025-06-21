import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";

import { SubscriptionPlan } from "./components/subscription-plan";

const SubscriptionPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Subscription</PageTitle>
          <PageDescription>
            Manage your subscription and billing information.
          </PageDescription>
        </PageHeaderContent>
        {/* <PageActions></PageActions> */}
      </PageHeader>
      <PageContent>
        <SubscriptionPlan className="w-[350px]" active={false} />
      </PageContent>
    </PageContainer>
  );
};

export default SubscriptionPage;
