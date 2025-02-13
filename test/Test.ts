import assert from "assert";
import { 
  TestHelpers,
  Silo_Approval
} from "generated";
const { MockDb, Silo } = TestHelpers;

describe("Silo contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Silo contract Approval event
  const event = Silo.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Silo_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Silo.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualSiloApproval = mockDbUpdated.entities.Silo_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedSiloApproval: Silo_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSiloApproval, expectedSiloApproval, "Actual SiloApproval should be the same as the expectedSiloApproval");
  });
});
