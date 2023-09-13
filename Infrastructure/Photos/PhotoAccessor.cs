using Application.Interfaces;
using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Photos;

public class PhotoAccessor : IPhotoAccessor
{
    Task<PhotoUploadResult> IPhotoAccessor.AddPhoto(IFormFile file)
    {
        throw new NotImplementedException();
    }

    Task<string> IPhotoAccessor.DeletePhoto(string publicId)
    {
        throw new NotImplementedException();
    }
}