import { bleConstants } from "../utils/constants";

describe('bleConstants', () => {
  it('should set and get the UUIDs correctly', () => {
    const angleControlUuid = '00003834-0000-1000-8000-00805f9b34fb';
    const pControlUuid = '26318e26-76cd-4320-9b32-6cbd80db89c5';
    const iControlUuid = '5ff892c4-333a-483d-bea6-2e86f40010b0';
    const dControlUuid = 'a9042d44-fd2d-4961-80df-1815cd237d29';
    const selectModeUuid = '2316d65e-3d61-4071-a020-b00776e3468d';
    const selectSensorUuid = 'some-uuid-for-select-sensor';

    bleConstants.setServiceAngleControlUuid(angleControlUuid);
    bleConstants.setServicePControlUuid(pControlUuid);
    bleConstants.setServiceIControlUuid(iControlUuid);
    bleConstants.setServiceDControlUuid(dControlUuid);
    bleConstants.setServiceSelectModeUuid(selectModeUuid);
    bleConstants.setServiceSelectSensorUuid(selectSensorUuid);

    expect(bleConstants.getServiceAngleControlUuid()).toBe(angleControlUuid);
    expect(bleConstants.getServicePControlUuid()).toBe(pControlUuid);
    expect(bleConstants.getServiceIControlUuid()).toBe(iControlUuid);
    expect(bleConstants.getServiceDControlUuid()).toBe(dControlUuid);
    expect(bleConstants.getServiceSelectModeUuid()).toBe(selectModeUuid);
    expect(bleConstants.getServiceSelectSensorUuid()).toBe(selectSensorUuid);
  });
});