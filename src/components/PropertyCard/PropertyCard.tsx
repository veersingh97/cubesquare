import type { Property } from "../../types/property";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({
  property,
}: PropertyCardProps) => {
  const availablePercentage =
    (property.availableTokens / property.totalSupply) * 100;

  const isLowAvailability = availablePercentage < 20;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {property.name}
        </h5>

        <p className="card-text text-secondary">
          {property.location}
        </p>

        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <span>Price per token</span>
            <strong>${property.pricePerToken}</strong>
          </div>

          <div className="d-flex justify-content-between">
            <span>Total supply</span>
            <span>{property.totalSupply}</span>
          </div>

          <div className="d-flex justify-content-between">
            <span>Available</span>
            <span>{property.availableTokens}</span>
          </div>
        </div>

        <div className="mb-3">
          <div className="progress">
            <div
              className={`progress-bar ${
                isLowAvailability
                  ? "bg-warning"
                  : "bg-primary"
              }`}
              style={{
                width: `${availablePercentage}%`,
              }}
            />
          </div>

          {isLowAvailability && (
            <small className="text-warning-emphasis">
              Low availability
            </small>
          )}
        </div>

        <div className="mt-auto">
          <div className="mb-3">
            <strong>{property.yieldPercent}%</strong>{" "}
            yield
          </div>

          <button className="btn btn-primary w-100">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};