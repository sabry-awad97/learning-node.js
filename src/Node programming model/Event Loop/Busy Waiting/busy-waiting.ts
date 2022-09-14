// @ts-nocheck

(() => {
  throw new Error('This file is not supposed to run!');
})();

const resources = [networkIO, filesystemIO, database];

while (resources.length) {
  // this loop will keep on running and thus polling
  // unless all the resources are consumed or closed

  for (const resource of resources) {
    // try to read
    const data = resource.poll();

    if (data === 'NO_DATA_AVAILABLE') {
      // there is no data to read at the moment
      continue;
    }

    if (data === 'RESOURCE_CLOSED') {
      // the resource was closed, remove it from the list
      let index = resources.indexOf(resource);
      resources.splice(index, 1);
      continue;
    }

    //some data was received, process it
    consumeData(data);
  }
}

function consumeData(data: any) {
  // ....
  console.log(data);
  console.log(resources);
}
