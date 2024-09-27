// Small card for each resource for limited information
// export function ResourceCard() {}
export function ResourceCard({ resource, onClick }) {
    const { title, type, subject } = resource;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-700">Type: {type}</p>
        <p className="text-sm text-gray-700">Subject: {subject}</p>
      </div>
    );
  }
  
// Detailed view of each resource
// export function Resource() {}
export function Resource({ resource }) {
    const { title, type, subject, description, uploadedBy, uploadedAt, link } = resource;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Type:</strong> {type}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Subject:</strong> {subject}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Uploaded By:</strong> {uploadedBy}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Uploaded At:</strong> {new Date(uploadedAt).toLocaleDateString()}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Description:</strong> {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Resource
        </a>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Resource
          </button>
        </div>
      </div>
    );
  }

  
  const sampleResource = {
    title: 'Data Structures Lecture Notes',
    type: 'PDF',
    subject: 'Computer Science',
    description: 'Comprehensive notes on data structures for CS students.',
    uploadedBy: 'Professor Jane Doe',
    uploadedAt: '2024-09-15',
    link: 'https://example.com/resource.pdf',
  };
  
  // Usage:
//   <ResourceCard
//     resource={sampleResource}
//     onClick={() => console.log('Resource Card Clicked')}
//   />
//   <Resource resource={sampleResource} />
  