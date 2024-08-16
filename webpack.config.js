// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default {
//   mode: 'development',  // or 'production'
//   entry: './src/main.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.svg$/,
//         use: ['@svgr/webpack', 'file-loader'],
//         exclude: /node_modules/,
//         // use: {
//         //   loader: 'babel-loader',
//         // },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };


import path from 'path';

export default {
  entry: './src/main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
      // Add other loaders as needed
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.svg', '.png', '.webp'], // Ensure these match your project needs
  },
};
