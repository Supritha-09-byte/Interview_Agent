import { getAssessments } from "@/actions/interview";
import InterviewView from "./interview-view";

export const dynamic = "force-dynamic";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();
  return <InterviewView assessments={assessments} />;
}
