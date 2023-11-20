import React from 'react';

const ImageCard = ({ image }) => {
  //console.log(image);
  const tags = image.tags.split(', '); //", "분리해서 배열로 저장됨
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img src={image.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user} </div>
        <ul>
          <li>
            <strong>뷰: </strong> {image.views}
          </li>
          <li>
            <strong>다운로드: </strong> {image.downloads}
          </li>
          <li>
            <strong>추천수: </strong> {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 text-xs font-semibold text-gray-700">
        {tags.map((tag, idx) => (
          <span key={idx} className="inline-block bg-orange-100 rounded-full px-3 py-1 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
