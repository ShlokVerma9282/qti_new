require('dotenv').config();
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    }
});

module.exports.getPreSignedForUpload = async function (filename, contentType) {
    const key = `projects/${filename}`;
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: key,
        ContentType: contentType
    })
    const url = await getSignedUrl(client, command, { expiresIn: 60 });
    return url;
}

module.exports.getPreSignedForGet = async function (key) {
    const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: key
    });
    const url = await getSignedUrl(client, command, { expiresIn: 20 });
    return url;
}