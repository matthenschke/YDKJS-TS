import { create as createPub } from "./publication";

function printDetails(pub: { print() }, url: string): void {
  pub.print();
  console.log(`URL: ${url}`);
}

export function create(title, author, pubDate, url: string): { print(): void } {
  let pub = createPub(title, author, pubDate);
  let publicAPI = {
    print() {
      printDetails(pub, url);
    }
  };

  return publicAPI;
}
