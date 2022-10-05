import Link from "next/link";
import React from "react";

const ClientPage = () => {
  const clients = [
    { id: "max", name: "Max" },
    { id: "min", name: "Min" },
  ];

  return (
    <div>
      Client Page
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{
                  pathname: `clients/[id]`,
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientPage;
