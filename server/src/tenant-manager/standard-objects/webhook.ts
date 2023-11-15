const webhookMetadata = {
  nameSingular: 'webhookV2',
  namePlural: 'webhooksV2',
  labelSingular: 'Webhook',
  labelPlural: 'Webhooks',
  targetTableName: 'webhook',
  description: 'A webhook',
  icon: 'IconRobot',
  isActive: true,
  isSystem: true,
  fields: [
    {
      isCustom: false,
      isActive: true,
      type: 'TEXT',
      name: 'targetUrl',
      label: 'Target Url',
      targetColumnMap: {
        value: 'targetUrl',
      },
      description: 'Webhook target url',
      icon: 'IconLink',
      isNullable: false,
    },
    {
      isCustom: false,
      isActive: true,
      type: 'TEXT',
      name: 'operation',
      label: 'Operation',
      targetColumnMap: {
        value: 'operation',
      },
      description: 'Webhook operation',
      icon: 'IconCheckbox',
      isNullable: false,
    },
  ],
};

export default webhookMetadata;
