/* config/dev.js */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  // С�����ר������
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // С�������ʽ���ñ�����Դ��������
        url: {
          enable: true,
          config: {
            limit: 10240 // �ļ���С����
          }
        }
      }
    }
  },
  h5: {}
}