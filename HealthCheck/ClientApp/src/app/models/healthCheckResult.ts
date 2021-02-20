interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}
interface Check {
  name: string;
  status: string;
  responseTime: number;
}
