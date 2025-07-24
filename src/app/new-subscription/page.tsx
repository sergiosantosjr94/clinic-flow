import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { SubscriptionPlan } from "../(protected)/subscription/components/subscription-plan";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="mb-8 w-full max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Unlock the Full Potential of Your Clinic
        </h1>
        <p className="mb-6 text-xl text-gray-600">
          Simplify your clinic management with our all-in-one platform. From
          scheduling appointments to managing patient records, we’ve got you
          covered.
        </p>
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="font-medium text-amber-800">
            🚀{" "}
            <span className="font-semibold">
              Transform your clinic&apos;s efficiency. Professionals that use
              our platform save up to 10 hours a week
            </span>{" "}
            in administrative tasks.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md">
        <SubscriptionPlan userEmail={session.user.email} />
      </div>

      <div className="mt-8 max-w-lg text-center">
        <p className="text-sm text-gray-500">
          Join over 2,000 healthcare professionals who have already transformed
          their routine with our solution. 30-day satisfaction guarantee or your
          money back.
        </p>
      </div>
    </div>
  );
}
