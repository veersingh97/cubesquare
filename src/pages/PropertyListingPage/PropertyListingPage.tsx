import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProperties } from "../../api/properties";
import { PropertyCard } from "../../components/PropertyCard";
import { KYCStatusBanner } from "../../components/KYCStatusBanner";

export const PropertyListingPage = () => {
  const [minimumYield, setMinimumYield] = useState("");
  const [location, setLocation] = useState("all");

  const {
    data: properties = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });

  const locations = useMemo(
    () => [...new Set(properties.map((property) => property.location))],
    [properties],
  );

  const filteredProperties = useMemo(() => {
    const minYield = Number(minimumYield);

    return properties.filter((property) => {
      const matchesYield =
        !minimumYield || property.yieldPercent >= minYield;

      const matchesLocation =
        location === "all" || property.location === location;

      return matchesYield && matchesLocation;
    });
  }, [properties, minimumYield, location]);

  if (isLoading) {
    return (
      <main className="container py-4">
        <KYCStatusBanner status="pending" />

        <div className="alert alert-info">
          Loading properties...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="container py-4">
        <KYCStatusBanner status="pending" />

        <div className="alert alert-danger">
          Unable to load properties. Please try again.
        </div>
      </main>
    );
  }

  return (
    <main className="container py-4">
      <KYCStatusBanner status="pending" />

      <div className="mb-4">
        <h1 className="mb-1">Property Investments</h1>
        <p className="text-secondary mb-0">
          Explore available fractional property investments.
        </p>
      </div>

      {/* Filters */}
      <section className="card mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label
                htmlFor="minimum-yield"
                className="form-label"
              >
                Minimum yield (%)
              </label>

              <input
                id="minimum-yield"
                type="number"
                min="0"
                step="0.1"
                className="form-control"
                value={minimumYield}
                onChange={(event) =>
                  setMinimumYield(event.target.value)
                }
                placeholder="e.g. 7"
              />
            </div>

            <div className="col-12 col-md-6">
              <label
                htmlFor="location"
                className="form-label"
              >
                Location
              </label>

              <select
                id="location"
                className="form-select"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
              >
                <option value="all">All locations</option>

                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Empty state */}
      {filteredProperties.length === 0 ? (
        <div className="alert alert-secondary">
          No properties match your current filters.
        </div>
      ) : (
        <div className="row g-4">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="col-12 col-md-6 col-lg-4"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};