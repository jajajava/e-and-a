class ChangeDecimalPrecisionAndScaleInTabs < ActiveRecord::Migration[7.0]
  def up
    change_column :tabs, :total, :decimal, precision: 10, scale: 2
  end

  def down
    change_column :tabs, :total, :decimal
  end
end