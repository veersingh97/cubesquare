type KYCStatus = "pending" | "rejected" | "approved";

interface KYCStatusBannerProps {
  status: KYCStatus;
}

export const KYCStatusBanner = ({
  status,
}: KYCStatusBannerProps) => {
  if (status === "approved") {
    return null;
  }

  if (status === "pending") {
    return (
      <div className="alert alert-warning">
        Your identity verification is in progress.
        <br />
        You can browse but cannot invest yet.
      </div>
    );
  }

  return (
    <div className="alert alert-danger">
      Your identity verification was unsuccessful.
      <br />
      Please contact support.
    </div>
  );
};