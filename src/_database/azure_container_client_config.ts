import { BlobServiceClient } from "@azure/storage-blob";

const connectionString = 'DefaultEndpointsProtocol=https;AccountName=kencloudtest001;AccountKey=g+YYdbAPSbCVWJxKwkxky9IS9LhOb9glgiHWLC7WGaEkUWivlX/qIhvyfYgRa+XGs4cshHKYg4Fi+AStC6NpMg==;EndpointSuffix=core.windows.net';
const containerName = 'cloud-test';

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

const containerClient = blobServiceClient.getContainerClient(containerName);

export default containerClient;