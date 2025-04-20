import { useParams } from 'react-router-dom';

const VideoDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-xl font-semibold">Video Details for ID: {id}</h1>
    </div>
  );
};

export default VideoDetails;
