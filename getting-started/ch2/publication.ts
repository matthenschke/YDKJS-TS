function printDetails(title: string, author: string, pubDate: string): void {
  console.log(`Title: ${title}
                 Author: ${author}
                 Published Date: ${pubDate}`);
}

export function create(title, author, price): { print(): void } {
  let publicAPI = {
    print() {
      printDetails(title, author, price);
    }
  };

  return publicAPI;
}
