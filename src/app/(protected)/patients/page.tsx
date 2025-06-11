import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { db } from "@/db";
import { patientsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddPatientButton from "./components/add-patient-button";
import { columns } from "./components/table-columns";

const PatientsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  const patients = await db.query.patientsTable.findMany({
    where: eq(patientsTable.clinicId, session.user.clinic.id),
  });
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Patients</PageTitle>
          <PageDescription>Manage your patients</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddPatientButton />
        </PageActions>
      </PageHeader>
      <PageContent>
        <div className="flex w-full flex-col gap-6 rounded-md bg-white">
          <DataTable columns={columns} data={patients} />
        </div>
      </PageContent>
    </PageContainer>
  );
};

export default PatientsPage;
